package ro.ddrm.authserver.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record Login(@NotBlank(message = "Email must not be blank") @Email
                    @Size(max = 50) String email,

                    @NotBlank(message = "Password must not be black")
                    @Size(min = 8, max = 20) String password) {}
