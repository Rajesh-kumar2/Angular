import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  // Data holders
  uiData: any; // To hold all static and option data from API
  sampleForm: FormGroup;

  // For the LEI/CICI table
  affectedCidsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['sourceId', 'id', 'name'];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Initialize form structure to prevent template errors before data arrives
    this.sampleForm = this.fb.group({
      repDeterminedBy: [''],
      canadianPersonRep: [''],
      localJurisdictions: this.fb.group({}),
      registeredToTrade: [''],
      registeredDealerJurisdictions: this.fb.group({}),
      affiliateOfResponsiblePerson: [''],
      affiliateJurisdictions: this.fb.group({}),
      consentToDisclosure: [''],
      allReportingRequirements: [''],
      additionalCovReReporting: this.fb.group({}),
      agreementReReportingPartyRules: [''],
      canadianBCRRule: [''],
      namedPerson: [''],
      notEligibleDerivativesParty: [''],
      legalNameOfDerivativesParty: [''],
      legalNameOfDerivativesParty2: [''], // For the second list
      eligibleDerivativesPartyWaiver: [''],
      natureOfBusiness: [''],
      typeOfRisk: [''],
      typeOfDealer: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getRegulationData().subscribe(data => {
      this.uiData = data;
      this.affectedCidsDataSource.data = data.affectedCids;
      this.initializeFormControls(data.options.provinces);
      this.sampleForm.patchValue(data.formState);
      console.log('Form Initialized:', this.sampleForm.value);
    });
  }

  // Dynamically add province checkboxes to the form based on API data
  private initializeFormControls(provinces: string[]): void {
    const provinceToControlName = (name: string) => name.replace(/\s+/g, '');

    const localJurisdictions = this.sampleForm.get('localJurisdictions') as FormGroup;
    provinces.forEach(p => localJurisdictions.addControl(provinceToControlName(p), new FormControl(false)));

    const registeredDealerJurisdictions = this.sampleForm.get('registeredDealerJurisdictions') as FormGroup;
    provinces.forEach(p => registeredDealerJurisdictions.addControl(provinceToControlName(p), new FormControl(false)));

    const affiliateJurisdictions = this.sampleForm.get('affiliateJurisdictions') as FormGroup;
    provinces.forEach(p => affiliateJurisdictions.addControl(provinceToControlName(p), new FormControl(false)));

    const additionalCovReReporting = this.sampleForm.get('additionalCovReReporting') as FormGroup;
    provinces.forEach(p => additionalCovReReporting.addControl(provinceToControlName(p), new FormControl(false)));
  }

  // Helper to convert province name to form control name for the template
  getControlName(name: string): string {
    return name.replace(/\s+/g, '');
  }
}
