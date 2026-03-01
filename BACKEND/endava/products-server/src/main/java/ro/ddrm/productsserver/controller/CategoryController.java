package ro.ddrm.productsserver.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ro.ddrm.productsserver.dto.request.CreateCategory;
import ro.ddrm.productsserver.service.CategoryService;


@RestController
@RequestMapping("/categories")
public class CategoryController {

  private final CategoryService categoryService;

  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @PostMapping("/")
  @ResponseStatus(HttpStatus.CREATED)
  public void createCategory(@RequestBody CreateCategory request) {}

  @GetMapping("/")
}
