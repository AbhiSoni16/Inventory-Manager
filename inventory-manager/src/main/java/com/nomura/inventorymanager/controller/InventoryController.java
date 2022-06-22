/**
 * 
 */
package com.nomura.inventorymanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nomura.inventorymanager.entity.Inventory;
import com.nomura.inventorymanager.repository.InventoryJdbcRepository;

/**
 * @author Soni_
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/stockall")
public class InventoryController {
	
	@Autowired
	private InventoryJdbcRepository inventoryRepo;
	
	@GetMapping
    public List<Inventory> getInventory() {
        return inventoryRepo.fetchAll();
    }

    @PostMapping
    public int addInventory(@RequestBody Inventory inventory) {
        return inventoryRepo.insert(inventory);
    }
}
