/* https://www.uspharmacist.com/article/generic-substitution-laws */

/*Some states have unique laws about substituting drugs. */
export const uniqueLaws = {
  /*
  In Oklahoma, for example, the law states that it is unlawful for a pharmacist to substitute any like drug, medicine, chemical, or pharmaceutical preparation without the authority of the prescriber or purchaser.18 
  */
  OK: "Needs consent from prescriber or purchaser for any substitution",
  /*
 In Hawaii, it is unlawful for pharmacists to substitute an equivalent generic product for any antiepileptic drug without practitioner and patient consent.
*/
  HI: "Needs consent from physician and patient for antiepileptic drug",

  /*
19 In Florida, each community pharmacy must establish a formulary of generic and brand-name drug products that, if selected as drug product of choice, would not pose a threat to the health and safety of patients receiving prescription medication.20 
*/
  FL:
    "Needs consult with list from community pharmacy (verify with PP pharmacist)",

  /*
In Iowa, the Board of Pharmacy advises use of the Orange Book to determine therapeutic equivalency.21 
*/
  IA: "Use Orange Book for therapeutic equivalency",

  /*

The Kentucky Board of Pharmacy maintains a list of narrow therapeutic index (NTI) drugs that cannot be substituted, including digitalis glycosides, antiepileptic drugs, antiarrhythmic agents, conjugated estrogens, esterified estrogens, warfarin anticoagulants, theophylline products, and thyroid preparations.22 
*/
  KY: "Create list of NTI drugs from KY board of pharmacy here",

  /*
Likewise, the North Carolina Board of Pharmacy maintains a list of NTI drugs that are not to be substituted. The 2007 list of NTI drugs includes: carbamazepine (all oral dosage forms); cyclosporine (all oral dosage forms); digoxin (all oral dosage forms); ethosuximide; levothyroxine sodium tablets; lithium (all salts, all oral dosage forms); phenytoin (all salts, all oral dosage forms); procainamide; theophylline (all salts, all oral dosage forms); and warfarin sodium tablets.23 
*/
  NC: "Create list of NTI drugs from NC board of pharmacy here",

  /*
The Pennsylvania Board of Pharmacy also maintains a list of NTI drugs that are not to be substituted.24 
*/
  PA: "Create list of NTI drugs from PA board of pharmacy here",
  /*
  In South Carolina, the Board recommends not substituting three types of medications, "1) including narrow therapeutic index drugs, e.g. lithium); 2) Premarin or Synthroid; and 3) ‘Critical drugs' in the following categories: anticoagulants, anticonvulsants, anti-asthmatics (especially time-release products), insulin, and cardiac glycosides."25 
*/
  SC: "Create list of NTI drugs from KY board of pharmacy here",
  /*

In Tennessee, "a pharmacist may substitute A-rated products and use his judgment on unrated products except for antiepileptic drugs used to treat patients with epilepsy or seizures."26 
*/
  TN: "Create list of NTI drugs from TN board of pharmacy here"
};
/*
It is interesting that certain states recognize NTI drugs and have prohibitions, to some extent, about substituting products in this category. Even more curious is that the FDA has adopted the position since at least 1997 that NTI drugs do not need to be regulated any differently than other classes of drugs.27 Nevertheless, in 1995 the FDA developed a list of NTI drugs for purposes of determining which types of studies should be done with specific dosage forms to make bioequivalence determinations.28 The drugs identified by the federal government as NTI drugs are given in TABLE 3. In 1990, the Acting Commissioner of the FDA stated in a letter to the Pennsylvania Department of Health that the FDA does not formally designate NTI drugs in the Orange Book or elsewhere. */

/*provide a list of rxcui's for drugs with narrow therapeutic index, where automatic substitution of generic 
drugs is not allowed with patient and/or physician consent*/

/* NTI drugs listed as special category above: */
export const specialCategory = ["KY", "NC", "PA", "SC", "TN"];

/*mandatory/permissive substitution:
states generally either permit or mandate that the pharmacist substitute
a generic version of a prescribed drug if all prescription requirements are met.*/
export const mandatory = [
  "FL",
  "KY",
  "MA",
  "MN",
  "MS",
  "NJ",
  "NY",
  "PA",
  "PR",
  "RI",
  "WA",
  "WV"
];
export const permissive = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "LA",
  "ME",
  "MD",
  "MI",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NM",
  "NC",
  "ND",
  "OH",
  "OR",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WI",
  "WY"
];

export const ptConsentNeeded = [
  "AK",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "ME",
  "MD",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NY",
  "ND",
  "OH",
  "PA",
  "PR",
  "SC",
  "SD",
  "TX",
  "UT",
  "VT",
  "VA",
  "WV",
  "WI",
  "WY"
];
