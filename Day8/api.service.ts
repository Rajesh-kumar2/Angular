import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getRegulationData(): Observable<any> {
    const mockData = {
      // Static Display Data
      basicInfo: {
        ipo: '0000000173100',
        proLei: '5493000SWFUT3NZT22',
        division: 'GOS-SEC SERVICES',
        corporateType: 'HEAD OFFICE',
        cid: '988490015',
        entityCid: 'ENTITY CID',
        subDivision: 'ISD TAX EXEMPT',
        customerClass: 'CORPORATION',
        customerStatus: 'Open',
        entityCidName: 'POLLING DRAWING EXTRADE-MONEYFIN',
        kycLead: 'GERRY P CATDUGLIO',
        cidFundManager: 'US BANK'
      },
      leiciInfo: {
        leiciId: '5493000SWFUT3NZT22',
        alternateSourceIFID: '000000173100',
        entityStatus: 'Active',
        regStatus: 'Issued',
        leiName: 'U.S. BANK NATIONAL ASSOCIATION',
        leiAddress: '425 WALNUT STREET, CINCINNATI, OH 45202',
        leiCountry: 'US'
      },
      regulatoryInfo: {
        matchId: 'A0000000000371',
      },

      // Table Data
      affectedCids: [
        { sourceId: 'C01', id: '335224041', name: 'ALJMALMN COMPANY OF AMERICA RETIREMENT PLANS' },
        { sourceId: 'C01', id: '988490015', name: 'HOWMET AEROSPACE INC' },
        { sourceId: 'C01', id: '988490104', name: 'ARCONIC INC /AIC 647031' },
        { sourceId: 'C01', id: '988490115', name: 'ALCOA INC 657023' },
        { sourceId: 'C01', id: '988490116', name: 'ALCOA INC 657023' },
        { sourceId: 'C01', id: '988490177', name: 'ALCOA INC 723012' },
      ],

      // Data for Dropdowns and Checkboxes (from API)
      options: {
        repDeterminedBy: ['Martin - Canadian Rep', 'Client Provided', 'Internal'],
        canadianPersonRep: ['Canadian Person', 'Non-Canadian Person'],
        provinces: [
          'Canada', 'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland And Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon', 'Northwest Territories', 'Nunavut'
        ],
        tradeDerivatives: ['Registered To Trade', 'Not Registered'],
        yesNo: ['Yes', 'No'],
        reportingRules: ['Deemed Dealer For Reporting Party Rules', 'Rule Set B'],
        namedPerson: ['Individual', 'Entity'],
        derivativesParty: [
            { code: 'A', text: 'A - Canadian financial institution or CFI' },
            { code: 'B', text: 'B - Development Bank of Canada' },
            { code: 'C', text: 'C - Voting Subsidiary' },
            { code: 'D', text: 'D - Derivatives and Investment Adviser/Dealer' },
            { code: 'E', text: 'E - Pension funds' },
            { code: 'F', text: 'F - Foreign Jurisdiction Law' },
            { code: 'G', text: 'G - Government of Canada' },
            { code: 'H', text: 'H - Foreign Government' },
        ]
      },

      // Initial values for form controls
      formState: {
        repDeterminedBy: 'Martin - Canadian Rep',
        canadianPersonRep: 'Canadian Person',
        localJurisdictions: { Canada: true, Ontario: true },
        registeredToTrade: 'Registered To Trade',
        registeredDealerJurisdictions: { Quebec: true },
        affiliateOfResponsiblePerson: 'Yes',
        affiliateJurisdictions: { Alberta: true, Quebec: true },
        consentToDisclosure: 'Yes',
        allReportingRequirements: 'Yes',
        additionalCovReReporting: {},
        agreementReReportingPartyRules: 'Deemed Dealer For Reporting Party Rules',
        canadianBCRRule: 'Markit - Canadian BCR',
        namedPerson: 'Individual',
        notEligibleDerivativesParty: 'No',
        legalNameOfDerivativesParty: 'D',
        typeOfRisk: 'Others',
        typeOfDealer: 'A derivatives dealer, head office/principal business in Canada'
      }
    };

    // Simulate network delay
    return of(mockData).pipe(delay(500));
  }
}
