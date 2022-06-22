/**
 * 
 */
package com.nomura.inventorymanager.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.nomura.inventorymanager.entity.Inventory;

/**
 * @author Soni_
 *
 */
@Repository
public class InventoryJdbcRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	class InventoryRowMapper implements RowMapper<Inventory> {
		@Override
		public Inventory mapRow(ResultSet rs, int rowNum) throws SQLException {
			Inventory inventory = new Inventory();
			inventory.setBrand(rs.getString("brand"));
			inventory.setSize(rs.getInt("size"));
			inventory.setQuantity(rs.getInt("quantity"));
			inventory.setPrice(rs.getDouble("price"));
			inventory.setIn_stock(rs.getBoolean("in_stock"));
			return inventory;
		}

	}

	public List<Inventory> fetchAll() {
		return jdbcTemplate.query("select * from Inventory", new InventoryRowMapper());
	}

	public int insert(Inventory inventory) {
		return jdbcTemplate.update("insert into inventory (brand, size, quantity, price, in_stock) " + "values(?,?,?,?,?)",
				new Object[] {inventory.getBrand(), inventory.getSize(), inventory.getQuantity(), inventory.getPrice(), inventory.getIn_stock()});
	}

}
