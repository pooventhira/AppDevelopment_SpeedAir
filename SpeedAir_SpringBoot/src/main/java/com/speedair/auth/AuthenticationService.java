package com.speedair.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.speedair.config.JwtService;
import com.speedair.model.Token;
import com.speedair.model.AuthUser;
import com.speedair.repository.AuthUserRepo;
import com.speedair.repository.TokenRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthUserRepo authUserRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepo tokenRepo;

    public AuthenticationResponse register(RegisterRequest request) {
        var authUser = AuthUser.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        authUserRepo.save(authUser);
        jwtService.generateToken(authUser);
        AuthenticationRequest authRequest = new AuthenticationRequest(request.getEmail(), request.getPassword());
        return authenticate(authRequest);

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));
        var authUser = authUserRepo.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(authUser);
        revokeAllUserTokens(authUser);
        saveUserToken(authUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .role(authUser.getRole())
                .build();

    }

    private void saveUserToken(AuthUser authUser, String accessToken) {
        var token = Token.builder().authUser(authUser).token(accessToken).expired(false).revoked(false).build();
        tokenRepo.save(token);
    }

    private void revokeAllUserTokens(AuthUser authUser) {
        var validUserTokens = tokenRepo.findAllByAuthUser_IdAndExpiredFalseAndRevokedFalse(authUser.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepo.saveAll(validUserTokens);
    }

    public void logout(String username) {
        System.out.println("Logout Functionality Called");
        var authUser = authUserRepo.findByEmail(username).orElseThrow();
        revokeAllUserTokens(authUser);
    }

}
