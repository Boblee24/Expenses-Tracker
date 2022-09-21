window.addEventListener('load', () => {
    const form = document.querySelector('#expense_tracker')
    const input1 = document.querySelector('#payment_method')
    const input2 = document.querySelector('#input_date')
    const input3 = document.querySelector('#input_name')
    const input4 = document.querySelector('#input_amount')
    const table = document.querySelector('#table')
    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const input_1 = input1.value;
        const input_2 = input2.value;
        const input_3 = input3.value;
        const input_4 = input4.value

        

        if(input_2 == '') {
            alert('You need to fill out')
            return
        } else {
            console.log('Success')
        }
        if(input_3 == '') {
            alert('You need to fill out')
            return
        } else {
            console.log('Success')
        }
        if( input_4 == '' ) {
            alert('You need to fill out')
            return
        } else {
            console.log('Success')
        }

        const table_data = document.createElement('tr')
        table_data.classList.add('tabledata')

        const input_1_td = document.createElement('td')
        const input_1_td_el = document.createElement('input')
        input_1_td_el.classList.add('tdl')
        input_1_td_el.type = 'text'
        input_1_td_el.value = input_1
        input_1_td_el.setAttribute('readonly', 'readonly')

        input_1_td.appendChild(input_1_td_el)

        const input_2_td = document.createElement('td')
        const input_2_td_el = document.createElement('input')
        input_2_td_el.classList.add('td2')
        input_2_td_el.classList.add('tdl')
        input_2_td_el.type = 'text'
        input_2_td_el.value = input_2
        input_2_td_el.setAttribute('readonly', 'readonly')

        input_2_td.appendChild(input_2_td_el)


        const input_3_td = document.createElement('td')
        const input_3_td_el = document.createElement('input')
        input_3_td_el.classList.add('td3')
        input_3_td_el.classList.add('tdl')
        input_3_td_el.type = 'text'
        input_3_td_el.value = input_3
        input_3_td_el.setAttribute('readonly', 'readonly')

        input_3_td.appendChild(input_3_td_el)

        const input_4_td = document.createElement('td')
        const input_4_td_el = document.createElement('input')
        input_4_td_el.classList.add('td4')
        input_4_td_el.type = 'text'
        input_4_td_el.value = input_4
        input_4_td_el.setAttribute('readonly', 'readonly')
        
        const remove = document.createElement('img')
        remove.src = 'images/exit.svg'
        remove.classList.add('delete')
        
        input_4_td.appendChild(input_4_td_el)
        input_4_td.appendChild(remove)

        table_data.appendChild(input_1_td)
        table_data.appendChild(input_2_td)
        table_data.appendChild(input_3_td)
        table_data.appendChild(input_4_td)

        table.appendChild(table_data)
        remove.addEventListener('click', () => {
            table.removeChild(table_data)
        })

        //input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
    })
})