package ro.ddrm.productsserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.ddrm.productsserver.model.Category;


public interface CategoryRepository extends JpaRepository<Category, String> {}
