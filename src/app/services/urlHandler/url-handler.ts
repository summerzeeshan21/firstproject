import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlHandler {

  //public basic = 'https://hr.task.edialoguec.com/index.php/';
  public basic = environment.apiUrl;

  public base_users = `${this.basic}api/user/`;
  public base_app_company = `${this.basic}api/company/`;
  public base_app_supplier = `${this.basic}api/supplier/`;
  public base_app_supplier_funds = `${this.basic}api/supplierFunds/`;
  public base_app_supplier_invoice = `${this.basic}api/supplierInvoice/`;
  public base_app_supplier_received_items = `${this.basic}api/supplierReceivedItems/`;
  public base_app_customer= `${this.basic}api/customers/`;
  public base_app_features = `${this.basic}api/feature/`;
  public base_app_customer_funds = `${this.basic}api/customerFunds/`;
  public base_app_customer_invoice = `${this.basic}api/customerInvoice/`;
  public base_app_expenses = `${this.basic}api/expenses/`;
  public base_app_categories = `${this.basic}api/categories/`;
  public base_app_product = `${this.basic}api/product/`;
  public base_app_invoice = `${this.basic}api/invoice/`;
  public base_app_business_type = `${this.basic}api/businessType/`;
  public base_app_services = `${this.basic}api/services/`;
  public base_app_client = `${this.basic}api/client/`;
  public base_app_employee = `${this.basic}api/employee/`;
  public base_app_employee_salary = `${this.basic}api/employeeSalary/`;
  public base_app_brand = `${this.basic}api/brand/`;
  public base_app_size = `${this.basic}api/size/`;
  public base_app_color = `${this.basic}api/color/`;
  public base_app_design = `${this.basic}api/design/`;
  public base_app_inventory = `${this.basic}api/inventory/`;
  public base_app_heads= `${this.basic}api/heads/`;
  public base_app_vendor= `${this.basic}api/vendor/`;
 
  
  constructor() { }
  url = {
    get_payment_methods:`${this.basic}api/getPaymentMethods`,
    get_countries_list:`${this.basic}api/getCountriesList`,
    get_seasons:`${this.basic}api/getSeasons`,
    get_langs:`${this.basic}api/getLangs`,
    get_units:`${this.basic}api/getUnits`,
    get_selected_lang:`${this.basic}api/getSelectedLang`,
    user: {
      login: `${this.base_users}login`,  
      logout: `${this.base_users}logout`, 
      update: `${this.base_users}update?userId=`,  
      update_profile: `${this.base_users}updateProfile`,
      create: `${this.base_users}register`, 
      delete: `${this.base_users}delete?userId=`, 
      create_super_admin: `${this.base_users}createSuperAdmin`,  
      get_users: `${this.base_users}getUsers`,
      get_dashboard_data: `${this.base_users}getDashboardData`,
      get_user_by_id: `${this.base_users}getUserById?userId=`,
      get_certificates: `${this.base_users}GetCertificates`,
      upload_certificates: `${this.base_users}uploadCertificate`,
    },
    company: {
      create: `${this.base_app_company}create`, 
      update: `${this.base_app_company}update`,
      update_FBR_settings: `${this.base_app_company}updateFBRSettings`,
      get_all_companies: `${this.base_app_company}getAllCompanies`,
      get_company_by_id: `${this.base_app_company}getCompanyById?companyId=`,
      delete: `${this.base_app_company}delete?companyId=`
    },
supplier: {
      create: `${this.base_app_supplier}create`,
      update: `${this.base_app_supplier}update?supplierId=`, 
      import_suppliers: `${this.base_app_supplier}importSuppliers`,
      get_suppliers: `${this.base_app_supplier}getSuppliers`,
      get_supplier_by_id: `${this.base_app_supplier}getSuppliersById?supplierId=`,
      delete: `${this.base_app_supplier}delete?supplierId=`,  
    },
    supplier_invoice: {
      create: `${this.base_app_supplier_invoice}create`,
      update: `${this.base_app_supplier_invoice}update?supplierInvoiceId=`, 
      get_supplier_invoices: `${this.base_app_supplier_invoice}getSupplierInvoice`,
      get_total_amount: `${this.base_app_supplier_invoice}getTotalAmount`,
      get_supplier_by_id: `${this.base_app_supplier_invoice}getSupplierInvoiceById?id=`,
      delete: `${this.base_app_supplier_invoice}delete?supplierInvoiceId=`,  
    },
    supplier_funds: {
      get_supplier_funds: `${this.base_app_supplier_funds}getSupplierFunds`,
      get_supplier_funds_details: `${this.base_app_supplier_funds}getSupplierFundsDetail`,
      get_supplier_funds_by_supplier: `${this.base_app_supplier_funds}getSupplierFundsBySupplier?supplierId=`,
    },
     supplier_received_items: {
      create: `${this.base_app_supplier_received_items}create`,
      update: `${this.base_app_supplier_received_items}update?receivedItemId=`, 
      get_supplier_received_items: `${this.base_app_supplier_received_items}getSupplierReceivedItems`,
      get_total_amount: `${this.base_app_supplier_received_items}getTotalAmount`,
      get_supplier_by_id: `${this.base_app_supplier_received_items}getSupplierReceivedItemsById?supplierId=`,
      delete: `${this.base_app_supplier_received_items}delete?receivedItemId=`,  
    },
    employee: {
      create: `${this.base_app_employee}create`,
      update: `${this.base_app_employee}update`, 
      get_employee: `${this.base_app_employee}getEmployee`,
      get_employee_by_id: `${this.base_app_employee}getEmployeeById?id=`,
      delete: `${this.base_app_employee}delete?employeeId=`,  
    },
    employee_salary: {
      pay: `${this.base_app_employee_salary}pay`,
      update: `${this.base_app_employee_salary}update`, 
      get_salaries: `${this.base_app_employee_salary}getSalaries`,
      get_salary_by_employee_id: `${this.base_app_employee_salary}getSalaryByEmployeeId?employeeId=`,
      delete: `${this.base_app_employee_salary}delete?salaryId=`,  
    },
    customer: {
      create: `${this.base_app_customer}create`,
      update: `${this.base_app_customer}update`, 
      get_customers: `${this.base_app_customer}getCustomers`,
      get_customer_by_id: `${this.base_app_customer}getCustomersById?id=`,
      delete: `${this.base_app_customer}delete?customerId=`,  
    },
    features: {
      create: `${this.base_app_features}create`,
      update: `${this.base_app_features}update`, 
      get_all_features: `${this.base_app_features}getAllFeatures`,
      get_all_business_types: `${this.base_app_features}getAllBusinessTypes`,
      delete: `${this.base_app_features}delete?featureId=`,  
    },
    business_type: {
      create: `${this.base_app_business_type}create`,
      update: `${this.base_app_business_type}update`, 
      add_feature_to_business_type: `${this.base_app_business_type}addFeatureToBusinessType`, 
      remove_feature_from_business_type: `${this.base_app_business_type}removeFeatureFromBusinessType`, 
      get_all_business_types: `${this.base_app_business_type}getAllBusinessTypes`,
      delete: `${this.base_app_business_type}delete?businessTypeId=`,  
    },
    customer_funds: {
      get_customer_funds: `${this.base_app_customer_funds}getCustomerFunds`,
      get_customer_funds_details: `${this.base_app_customer_funds}getCustomerFundsDetail`,
      get_customer_funds_by_customer: `${this.base_app_customer_funds}getCustomerFundsByCustomer?customerId=`,
    },
    customer_invoice: {
      create: `${this.base_app_customer_invoice}create`,
      update: `${this.base_app_customer_invoice}update?customerInvoiceId=`, 
      get_customer_invoices: `${this.base_app_customer_invoice}getCustomerInvoice`,
      get_total_amount: `${this.base_app_customer_invoice}getTotalAmount`,
      get_customer_by_id: `${this.base_app_customer_invoice}getCustomerInvoiceById?id=`,
      delete: `${this.base_app_customer_invoice}delete?customerInvoiceId=`,  
    },
    expenses: {
      create: `${this.base_app_expenses}create`,
      update: `${this.base_app_expenses}update`, 
      get_expenses: `${this.base_app_expenses}getExpenses`,
      get_total_amount: `${this.base_app_expenses}getTotalAmount`,
      get_expenses_by_id: `${this.base_app_expenses}getExpensesById?id=`,
      delete: `${this.base_app_expenses}delete?expenseId=`,  
    },
    invoice: {
      create: `${this.base_app_invoice}create`,
      update: `${this.base_app_invoice}update`, 
      get_sale_invoices: `${this.base_app_invoice}getSaleInvoices`,
      get_fbr_invoices: `${this.base_app_invoice}getFBRInvoice`,
      get_overall_sale: `${this.base_app_invoice}getOverallSale`,
      get_profit_by_product: `${this.base_app_invoice}getProfitByProduct`,
      get_profit_by_vendor: `${this.base_app_invoice}getProfitByVendor`,
      get_return_items: `${this.base_app_invoice}getReturnItems`,
      get_sold_items: `${this.base_app_invoice}getSoldItems`,
      get_sale_invoices_by_customer: `${this.base_app_invoice}getSaleInvoiceByCustomer`,
      get_total_amount: `${this.base_app_invoice}getTotalAmount`,
      get_fbr_total_amount: `${this.base_app_invoice}getFBRTotalAmount`,
      get_return_invoice_total_amount: `${this.base_app_invoice}getReturnInvoiceTotalAmount`,
      get_return_invoices: `${this.base_app_invoice}getReturnInvoices`,
      get_invoice_by_number: `${this.base_app_invoice}getInvoiceByNumber`,
      delete_return_invoice: `${this.base_app_invoice}deleteReturnInvoice`,
      return_invoice: `${this.base_app_invoice}returnInvoice`,
      return_invoice_items: `${this.base_app_invoice}returnInvoiceItems`,
      delete: `${this.base_app_invoice}delete?customerId=`,  
    },
    categories: {
      create: `${this.base_app_categories}create`,
      update: `${this.base_app_categories}update`, 
      get_categories: `${this.base_app_categories}getCategories`,
      get_grocery_categories: `${this.base_app_categories}getGroceryCategories`,
      get_category_by_id: `${this.base_app_categories}getCategoryById?id=`,
      delete: `${this.base_app_categories}delete?categoryId=`,  
    },  
    product: {
      create: `${this.base_app_product}create`,  
      update: `${this.base_app_product}update?productId=`,
      updateAllSameCategory: `${this.base_app_product}updateAllSameCategory`,  
      get_products: `${this.base_app_product}getProducts`,
      import_grocery_products: `${this.base_app_product}importGroceryProducts`,
      get_all_drugs_list: `${this.base_app_product}getAllDrugsList`,
      get_all_grocery_items: `${this.base_app_product}getAllGroceryItems`,
      search_drugs_list: `${this.base_app_product}searchDrugsList`,
      search_grocery_list: `${this.base_app_product}searchGroceryList`,
      get_product_by_id: `${this.base_app_product}getProductsById?productId=`,  
      delete: `${this.base_app_product}delete?productId=`,
    },
    inventory: {
      create: `${this.base_app_inventory}create`,  
      get_inventories: `${this.base_app_inventory}getInventories`,
      import_stock: `${this.base_app_inventory}importStock`,
      get_stocks: `${this.base_app_inventory}getStocks`,
      search_item: `${this.base_app_inventory}searchItem`,
      get_supplier_bills: `${this.base_app_inventory}getSupplierBills`,
      delete_supplier_bills: `${this.base_app_inventory}deleteSupplierBills?id=`,
      delete_item: `${this.base_app_inventory}deleteItem?id=`,
      get_inventories_total_amount:`${this.base_app_inventory}getInventoriesTotalAmount`,
    },
    maintenance_services: {
      create: `${this.base_app_services}create`,  
      update: `${this.base_app_services}update?maintenanceServiceId=`,  
      get_services: `${this.base_app_services}getMaintenanceServices`,
      get_service_by_id: `${this.base_app_services}getMaintenanceServiceById?maintenanceServiceId=`,  
      delete: `${this.base_app_services}delete?maintenanceServiceId=`,
    },
    heads: {
      create: `${this.base_app_heads}create`,
      update: `${this.base_app_heads}update`, 
      get_heads: `${this.base_app_heads}getHeads`,
      delete: `${this.base_app_heads}delete?headId=`,
      createBudgetAllocation:  `${this.base_app_heads}createBudgetAllocation`,
      getBudgetAllocations: `${this.base_app_heads}getBudgetAllocations`,
      addReleaseAmount:  `${this.base_app_heads}addReleaseAmount`, 
    },
    vendor: {
      create: `${this.base_app_vendor}create`,
      createInvoice: `${this.base_app_vendor}createInvoice`,
      update: `${this.base_app_vendor}update`, 
      getVendors: `${this.base_app_vendor}getVendors`,
      getVendorInvoices: `${this.base_app_vendor}getVendorInvoices`,
      delete: `${this.base_app_vendor}delete?vendorId=`,
      
    },
  }
}
