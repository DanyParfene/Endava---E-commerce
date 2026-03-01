package ro.ddrm.productsserver.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateCategory(@NotBlank(message = "Category must not be null")
                             @Size(max = 30) String name) {}
