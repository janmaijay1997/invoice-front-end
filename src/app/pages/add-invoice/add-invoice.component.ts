import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {


  constructor(private sidebarService: SidebarService,
    private fb: FormBuilder
  ) {
    this.invoiceForm = this.fb.group({
      client: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      items: this.fb.array([]),  // FormArray for dynamic items
      subtotal: [{ value: 0, disabled: true }]
    });
  }

  sidebarActive: boolean = false;
  ngOnInit() {
    // Subscribe to the sidebar active state
    let flage = localStorage.getItem("lastname");

    this.sidebarService.sidebarActive$.subscribe((state: any) => {
      this.sidebarActive = !state;
      if (flage) {
        this.sidebarActive = true;
      }
    });

  }
   users: any = [];
  invoiceForm: FormGroup;


  get items() {
    return this.invoiceForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.fb.group({
      itemName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    }));
    this.updateSubtotal();
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.updateSubtotal();
  }

  updateSubtotal() {
    const subtotal = this.items.controls.reduce((acc, item) => {
      const quantity = item.get('quantity')?.value || 0;
      const price = item.get('price')?.value || 0;
      return acc + quantity * price;
    }, 0);
    this.invoiceForm.patchValue({ subtotal });
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);
    } else {
      alert("Please fill all required fields");
    }
  }
}
