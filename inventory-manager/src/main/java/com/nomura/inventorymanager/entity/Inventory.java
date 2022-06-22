/**
 * 
 */
package com.nomura.inventorymanager.entity;

/**
 * @author Soni_
 *
 */
public class Inventory {
	private String brand;
	private Integer size;
	private Integer quantity;
	private Double price;
	private Boolean in_stock;
	
	public Inventory(String brand, Integer size, Integer quantity, Double price, Boolean in_stock) {
		super();
		this.brand = brand;
		this.size = size;
		this.quantity = quantity;
		this.price = price;
		this.in_stock = in_stock;
	}
	
	public Inventory() {
		// TODO Auto-generated constructor stub
	}

	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public Integer getSize() {
		return size;
	}
	public void setSize(Integer size) {
		this.size = size;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Boolean getIn_stock() {
		return in_stock;
	}
	public void setIn_stock(Boolean in_stock) {
		this.in_stock = in_stock;
	}
	
	
}
