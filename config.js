// ============================================
//  DIN AZURE-KONFIGURATION — ÄNDRA HÄR
// ============================================
//
//  Kör dessa kommandon i terminalen för att
//  hitta dina värden:
//
//  az account show
//  az group show --name <din-resource-group>
//
// ============================================

const config = {
  // Era namn — båda i paret
  kodare: ["Marcus", "Medina"],

  // Hitta med: az account show --query name -o tsv
  subscriptionNamn: "Azure for Students",

  // Ert favoritcitat
  favoritCitat: "It's me, Hi! I'm the teacher it's me.",

  // Er favoritartist
  favoritArtist: "Taylor Swift",

  // Hitta med: az group show --name <namn> --query location -o tsv
  region: "swedencentral",

  // Namn på din resource group
  resourceGroup: "rg-cd25-azure-info",

  // Namn på din Static Web App (hittar du i portalen)
  appNamn: "iths-cd25-info",
};
