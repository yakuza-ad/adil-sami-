//les types d'actions
export const AJOUTER_V = "AJOUTER_V";
export const SUPPRIMER_V = "SUPPRIMER_V";
export const MODIFIER_V = "MODIFIER_V";
export const LISTE_V = "LISTE_V";

//les Actions
export const AJOUTER_VOITURE_ACTION = {
  type: AJOUTER_V,
  payload: {},
};

export const SUPPRIMER_VOITURE_ACTION = {
  type: SUPPRIMER_V,
  payload: 1,
};

export const MODIFIER_VOITURE_ACTION = {
  type: MODIFIER_V,
  payload: {}
};
export const LISTE_VOITURE_ACTION = {
  type: LISTE_V,
  payload: null,
};
// les fonctions createurs d'actions
export function ajouterVoitureAction(voiture) {
  return {
    type: AJOUTER_V,
    payload: voiture,
  };
}
export function supprimerVoitureAction(idV) {
  return {
    type: SUPPRIMER_V,
    payload: idV,
  };
}
export function modifierVoitureAction(voiture) {
  return {
    type: MODIFIER_V,
    payload: voiture,
  };
}
export function listeVoitureAction() {
  return {
    type: MODIFIER_V,
    payload: null,
  };
}
