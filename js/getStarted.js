// get dome elements 
const getStartedItems = document.querySelectorAll(".get-started-item")
const getStartedFlex = document.querySelectorAll(".get-started-flex")
const menu= document.querySelector("nav")
const menuItem= document.querySelectorAll(".menu-item")
const toggleMenu = document.querySelector(".menu-toggle")

// get started page ======================

// menu toggle 
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})

// *********
getStartedItems.forEach((item1, idx1) => {
    item1.addEventListener('click', (e) => {
        

        if(e.target) {
            item1.classList.remove('active')
            getStartedItems.forEach(item2 => {
                item2.classList.remove('active')
            })
            item1.classList.add('active')

            getStartedFlex.forEach((item, idx) => {
                item.classList.remove('active')
                
                if(item1.classList.contains('active') && idx1 == 0) {
                    getStartedFlex[0].classList.add('active')
                }

                if(item1.classList.contains('active') && idx1 == 1) {
                    getStartedFlex[1].classList.add('active')
                }

                if(item1.classList.contains('active') && idx1 == 2) {
                    getStartedFlex[2].classList.add('active')
                }
            })
        }
    })
})