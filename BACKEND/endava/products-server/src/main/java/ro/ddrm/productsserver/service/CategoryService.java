package ro.ddrm.productsserver.service;

import org.springframework.stereotype.Service;

import ro.ddrm.productsserver.dto.request.CreateCategory;
import ro.ddrm.productsserver.repository.CategoryRepository;

@Service
public class CategoryService {
    
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public void createCategory(CreateCategory request) {

        
    }
}
