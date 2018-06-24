const Menu = require('../Models/Menu')

class MenuController {
  async index(request, response) {
    const menu = await Menu.find({})
    return response.json({ menu })
  }

  async addMenu(request, response) {
    const menu = await new Menu({
        menu: [
          {
            id: 0,
            menu: [
              {
                idDishes: 0,
                image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
                description: 'Пицца',
              },
              {
                idDishes: 1,
                image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
                description: 'Шашлык',
              },
              {
                idDishes: 2,
                image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
                description: 'Бургер',
              },
              {
                idDishes: 3,
                image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
                description: 'Борщ',
              },
            ]
          },
          {
            id: 1,
            menu: [
              {
                idDishes: 0,
                image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
                description: 'Шашлык',
              },
              {
                idDishes: 1,
                image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
                description: 'Пицца',
              },
              {
                idDishes: 2,
                image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
                description: 'Борщ',
              },
              {
                idDishes: 3,
                image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
                description: 'Бургер',
              },
            ]
          },
          {
            id: 2,
            menu: [
              {
                idDishes: 0,
                image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
                description: 'Бургер',
              },
              {
                idDishes: 1,
                image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
                description: 'Борщ',
              },
              {
                idDishes: 2,
                image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
                description: 'Пицца',
              },
              {
                idDishes: 3,
                image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
                description: 'Шашлык',
              },
            ]
          },
          {
            id: 3,
            menu: [
              {
                idDishes: 0,
                image: 'http://delovkusa.dp.ua/wp-content/uploads/2015/07/borsh.jpg',
                description: 'Борщ',
              },
              {
                idDishes: 1,
                image: 'http://www.menslife.com/upload/iblock/4be/piknik_po_korolevski_kak_prigotovit_idealnyy_shashlyk.jpg',
                description: 'Шашлык',
              },
              {
                idDishes: 2,
                image: 'https://gotovim-edim.ru/upload/resize_cache/recipes/1d0/655_454_1/shefburger4.jpg',
                description: 'Бургер',
              },
              {
                idDishes: 3,
                image: 'http://www.tomato-pizza.ru/image/uploaded/1425984970291181.jpg',
                description: 'Пицца',
              },
            ]
          },
        ]
      }
    )
    menu.save()
  }

}

module.exports = new MenuController()
