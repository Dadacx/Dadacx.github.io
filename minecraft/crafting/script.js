var data = {}
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json);
    fetch('./custom_data.json')
    .then((response) => response.json())
    .then((json) => custom_data = json)
    .then(custom_data => {
        custom_items = json2array(custom_data)
        custom_items.forEach(item => {
            data[item.name] = {name:item.name, image:item.image}
        })
        createDatalist()
        potions = []
        potionslist = json2array(data['minecraft:potion'].potions)
        potionslist.forEach(item => {
            potions.push(item.name)
        })
    });
    function createDatalist() {
        console.log("Ostatnia wersja: " + data.last_version)
        datalist = json2array(data)
        options = ""
        datalist.forEach(item => {
            options += '<option value="' + item.name + '"></option>'
        })
        document.querySelector("#items_id").innerHTML = options
    }
    function json2array(json){
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        return result;
    }
    function GetImage() {
        // Convert the div to image (canvas)
        html2canvas(document.getElementById("getImage")).then(function (canvas) {
    
            // Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
            test = canvas.toDataURL()
            console.log(test);
            document.querySelector("#image").setAttribute("src",test)
        });
    }
    function chooseSlot(slot) {
        if (document.querySelector('#active')) {
            document.querySelector('#active').id = ""
        }
        slot.id = "active"
    }
    function changeItem(value) {
        if (document.querySelector('#active') && value != "") {
            if (!value.includes('minecraft:') && !value.includes('custom:')) {
                if(data["custom:" + value]) value = "custom:" + value
                else value = "minecraft:" + value
            }
            item = data[value].image
            title = data[value].name
            if(value == "minecraft:potion" || value == "minecraft:splash_potion" || value == "minecraft:lingering_potion") {
                potion_type = prompt("Wybierz rodzaj potki\n" + potions.join("\n"))
                if(potion_type != "" && potion_type != null) {
                if (!potion_type.includes('minecraft:')) potion_type = "minecraft:" + potion_type
                console.log(potion_type)
                if(value == "minecraft:potion") {
                item = data['minecraft:potion'].potions[potion_type].image
                title = "Potion: " + data['minecraft:potion'].potions[potion_type].name
                }
                if(value == "minecraft:splash_potion") {
                    item = data['minecraft:splash_potion'].potions[potion_type].image
                    title = "Potion: " + data['minecraft:splash_potion'].potions[potion_type].name
                }
                if(value == "minecraft:lingering_potion") {
                    item = data['minecraft:lingering_potion'].potions[potion_type].image
                    title = "Potion: " + data['minecraft:lingering_potion'].potions[potion_type].name
                }
                }
            }
            document.querySelector("#active").firstElementChild.setAttribute("src",item)
            document.querySelector("#active").firstElementChild.setAttribute("title",title)
            document.querySelector("#active").id = ""
            document.querySelector('#item').value = ""
            document.querySelector("#no_slot").style.visibility = "hidden"
            document.querySelector("#no_item").style.visibility = "hidden"
            console.log(value)
        } else {
            document.querySelector("#no_slot").style.visibility = "hidden"
            document.querySelector("#no_item").style.visibility = "hidden"
            
            if(!document.querySelector('#active')) error("no_slot")
            if(value == "") error("no_item")
        }
    }
    function removeItem(slot) {
        slot.firstElementChild.setAttribute("src","")
        slot.firstElementChild.setAttribute("title","")
            document.querySelector("#active").id = ""
    }
    function setCount(count) {
        document.querySelector('#count').innerHTML = count
    }
    function EnchantGlint(checkbox) {
        if (checkbox.checked) {
            document.querySelector('#glint').style = "-webkit-mask-image: url("+ document.querySelector('#result').getAttribute('src') +");"
            document.querySelector('#glint').style.visibility = "visible"
        } else {
            document.querySelector('#glint').style = "-webkit-mask-image: url(\"\")"
            document.querySelector('#glint').style.visibility = "hidden"
        }
    }
    function sendCustomItem() {
        if(document.querySelector("#file").value != "" && document.querySelector('#customItem').value != 'custom:') {
        itemName = document.querySelector("#customItem").value 
        file = document.getElementById("file").files;
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                item = event.target.result
                console.log("Obrazek z inputa: " + item)
                data[itemName] = {name:itemName,image:item}
                document.querySelector("#items_id").innerHTML += '<option value="' + itemName + '"></option>'
            };
            fileReader.readAsDataURL(file[0]);
            document.querySelector("#file").value = ""
            document.querySelector('#fileBtn').innerHTML = 'Wybierz item'
            document.querySelector('#customItem').value = 'custom:'
            document.querySelector('#no_file').style.visibility = "hidden"
            document.querySelector('#no_custom_name').style.visibility = "hidden"
        } else {
            document.querySelector('#no_file').style.visibility = "hidden"
            document.querySelector('#no_custom_name').style.visibility = "hidden"

            if(document.querySelector("#file").value == "") error("no_file")
            if(document.querySelector('#customItem').value == 'custom:') error("no_custom_name")
        }
        }
        function error(id) {
            switch (id) {
                case "no_slot": {
                    document.querySelector("#no_slot").style.visibility = "visible"
                    break;
                }
                case "no_item": {
                    document.querySelector("#no_item").style.visibility = "visible"
                    break;
                } 
                case "no_file": {
                    document.querySelector("#no_file").style.visibility = "visible"
                    break;
                }
                case "no_custom_name": {
                    document.querySelector("#no_custom_name").style.visibility = "visible"
                    break;
                }   
            }
        }