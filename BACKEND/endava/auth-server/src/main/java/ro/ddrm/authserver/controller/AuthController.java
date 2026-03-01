package ro.ddrm.authserver.controller;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ro.ddrm.authserver.dto.request.Login;
import ro.ddrm.authserver.dto.request.Register;
import ro.ddrm.authserver.dto.response.UserDto;
import ro.ddrm.authserver.service.AuthService;
import ro.ddrm.shared.dto.response.SuccessResponse;


@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  @ResponseStatus(HttpStatus.OK)
  public SuccessResponse<UserDto> register(@RequestBody
                                           @Valid Register request) {
    UserDto response = authService.register(request);

    return new SuccessResponse<>("You account was created successfully",
                                 response);
  }

  @PatchMapping("/verify-account/{userId}/{token}")
  @ResponseStatus(HttpStatus.OK)
  public SuccessResponse<UserDto> verifyAccount(@PathVariable String userId,
                                                @PathVariable String token) {
    UserDto response = authService.verifyAccount(userId, token);

    return new SuccessResponse<>("You account is now verified", response);
  }

  @PostMapping("/login")
  @ResponseStatus(HttpStatus.OK)
  public SuccessResponse<UserDto> login(@RequestBody @Valid Login request) {
    
  }

}
