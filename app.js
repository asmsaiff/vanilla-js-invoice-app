const invoice_form = document.getElementById("invoice_form");

// Form Data
const your_name = document.getElementById('your_name')
const address = document.getElementById("address");
const city = document.getElementById("city");
const item_name = document.getElementById("item_name");
const description = document.getElementById("description");
const qty = document.getElementById("qty");
const flat_rate = document.getElementById("flat_rate");
const unit_rate = document.getElementById("unit_rate");

// Show Data
const show_name = document.getElementById("show_name");
const total_qty = document.getElementById("total_qty");
const total_amount = document.querySelectorAll("#total_amount");
const total_unit = document.getElementById("total_unit");

// Table Body
const show_invoice_data = document.getElementById("show_invoice_data");
const table_footer = document.getElementById("table_footer");

let form_data = [];
let qty_count = [];
let amount = [];
let unit = [];

invoice_form.addEventListener('submit', (e) => {
	e.preventDefault();

    if (your_name.value == '' || item_name.value == '' || description.value == '' || qty.value == '' || flat_rate.value == '' || unit_rate.value == '') {
        alert('Please, fill all input fields!!!')
    } else {
        data = {
            name: your_name.value,
            address: address.value,
            city: city.value,
            item_name: item_name.value,
            description: description.value,
            qty: qty.value,
            flat_rate: flat_rate.value,
            unit_rate: unit_rate.value,
        },
        form_data.push(data);

        form_data.forEach((val, key) => {
            show_name.innerHTML = val.name
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.classList = "text-center border";
            td1.innerHTML = key + 1;

            const td2 = document.createElement("td");
            td2.classList = "flex flex-col border pl-3";
            const create_name_span = document.createElement("span");
            create_name_span.innerHTML = val.item_name;

            const create_desc_span = document.createElement("span");
            create_desc_span.classList = "text-sm text-gray-500";
            create_desc_span.id = "show_desc";
            create_desc_span.innerHTML = val.description;

            td2.appendChild(create_name_span);
            td2.appendChild(create_desc_span);

            const td3 = document.createElement("td");
            td3.classList = "text-center border";
            td3.id = "qts";
            td3.innerHTML = val.qty;

            const td4 = document.createElement("td");
            td4.classList = "text-center border";
            td4.innerHTML = val.flat_rate;

            const td5 = document.createElement("td");
            td5.classList = "text-center border";
            td5.innerHTML = val.unit_rate;

            const td6 = document.createElement("td");
            td6.classList = "text-center border";
            td6.innerHTML = "X";

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            show_invoice_data.appendChild(tr);

            your_name.value = "";
            address.value = "";
            city.value = "";
            item_name.value = "";
            description.value = "";
            qty.value = "";
            flat_rate.value = "";
            unit_rate.value = "";
        });

        form_data = [];

        // Total Quantity Count
        qty_count.push(parseInt(data.qty));
        let totalQuantity = 0;

        for (let i = 0; i < qty_count.length; i++) {
            totalQuantity += qty_count[i];
        }
        total_qty.innerHTML = totalQuantity;

        // Total Amount Count
        amount.push(parseInt(data.flat_rate));
        let totalAmount = 0;

        for (let i = 0; i < amount.length; i++) {
            totalAmount += amount[i];
        }
        total_amount.forEach((val, key) => {
            val.innerHTML = totalAmount;
        })

        // Total Unit Cost Count
        unit.push(parseInt(data.unit_rate));
        let totalUnit = 0;

        for (let i = 0; i < unit.length; i++) {
            totalUnit += unit[i];
        }
        total_unit.innerHTML = totalUnit;
    }
})