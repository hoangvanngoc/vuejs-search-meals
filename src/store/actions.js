import axiosClient from '../axiosClient'

export async function searchMeals({ commit }, keyword) {
    await axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit("setSearchedMeals", data.meals);
    })
}

export async function searchMealsByLetter({ commit }, letter) {
  await axiosClient.get(`search.php?f=${letter}`)
  .then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export async function searchMealsByIngredient({ commit }, ing) {
  await axiosClient.get(`filter.php?i=${ing}`)
  .then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}