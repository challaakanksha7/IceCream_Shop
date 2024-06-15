let is_shop_opened = true

let btnOpen = document.getElementById('btnOpen')
let btnClose = document.getElementById('btnClose')
let imgOpenClose = document.getElementById('imgOpenClose')
let msgOpenClose = document.getElementById('msgOpenClose')
let onGoingTask = document.getElementById('onGoingTask')
let cus = document.getElementById('cust');


btnClose.style.display = 'none'



function handleOpenClose() {
    if(is_shop_opened) {    // Opened
        btnClose.style.display = 'block'
        btnOpen.style.display = 'none'
        imgOpenClose.src = './shop_opened.png'

        msgOpenClose.innerHTML = 'Shop is opend, do you want close?'

        onGoingTask.classList.remove('text-danger')
        onGoingTask.classList.add('text-success')
        
        
        onGoingTask.innerHTML = 'Magic Ice Cream Welcome You'
        cus.style.display = 'block'

        onGoingTask.style.color = 'Green' 
        const order = (call_production) =>{
            setTimeout(()=>{
                onGoingTask.innerHTML = 'Customer is ordering...'
                setTimeout(() => {call_production()},3000)
            ,3000})
           
        }

        const production = () =>{
            onGoingTask.innerHTML = 'Order received, starting production'
        }

        order(production)

        is_shop_opened = false

        

    } else {    // Closed
        btnClose.style.display = 'none'
        btnOpen.style.display = 'block'
        cus.style.display = 'block'

        is_shop_opened = true
        imgOpenClose.src = './shop_closed.png'
        msgOpenClose.innerHTML = 'Shop is closed, do you want open?'



        onGoingTask.innerHTML = 'Shop is closed! Please visit again!!!'
        onGoingTask.classList.remove('text-success')
        onGoingTask.classList.add('text-danger')
    }
}