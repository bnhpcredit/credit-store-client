import {Offer} from "./offer";
import {ProductLoanTypes} from "./product-loan-types.enum";


const productImages = new Map();
productImages.set(ProductLoanTypes.Car, 'car');
productImages.set(ProductLoanTypes.Department, 'department');
productImages.set(ProductLoanTypes.Vacation, 'vacation');
productImages.set(ProductLoanTypes.Study, 'study');

export class OffersList {
  loans: Offer[];

  constructor(data) {
    Object.assign(this, data);
    this.loans.forEach(loan => {
      loan.typeImage = productImages.get(loan.productType);
    });
  }
}
