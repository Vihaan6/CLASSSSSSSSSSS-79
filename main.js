var name_array = []
            function add() {
                var name = document.getElementById("textbox").value
                name_array.push(name);
                console.log(name_array);
                document.getElementById("list_of_names").innerHTML = name_array;
                var name = document.getElementById("textbox").value = ""
            }
            function sort() {
                name_array.sort();
                console.log(name_array);
                document.getElementById("list_of_names").innerHTML = name_array;
                var name = document.getElementById("textbox").value = ""
            }

            function remove() {
                name_array.pop();
                console.log(name_array)
                document.getElementById("list_of_names").innerHTML = name_array;
                var name = document.getElementById("textbox").value = ""
            }

            function deleete() {
                name_array = [];
                console.log(name_array)
                document.getElementById("list_of_names").innerHTML = name_array;
                var name = document.getElementById("textbox").value = ""
            }