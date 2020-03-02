$(function(){
    function addElement(){
        $('#addElement').change(function(){
            let element = $('#addElement').val();
            $('#formAdd').children().remove();
            if (element === "Auteur"){
                $('#formAdd').append(`
                <h1>Ajouter un Auteur</h1>
                <form action="admin.php" method="POST" id="addAuthor">

                    <label for="lname">Nom</label><br>
                    <input type="text" id="lname" name="lname" required><br>

                    <label for="fname">Prénom</label><br>
                    <input type="text" id="fname" name="fname" required><br>

                    <label for="country">Pays</label><br>
                    <select id="country" name="country" required>
                        <option></option>
                    </select><br>

                    <input type="submit" id="submit">

                </form>
                `)
                $.ajax({
                    type: "GET",
                    url: "http://api.test/getCountry.php",
                    data: "",
                    dataType : "json",
                    success : function(response){
                        console.log("ok");
                    }
                })
                .done(function(json){
                    console.log(json);
                    for(let option of json){
                    $('#country').append(`
                    <option>${option.name}</option>
                    `)  
                    }    
                })
            }
            if (element === "Livre"){
                $('#formAdd').append(`
                <h1>Ajouter un Livre</h1>
                <form action="admin.php" method="POST" id="addBook">

                    <label for="titleBook">Titre</label><br>
                    <input type="text" id="titleBook" name="titleBook" required><br>

                    <label for="synopsis">Synopsis</label><br>
                    <input type="text" id="synopsis" name="synopsis" required><br>

                    <label for="authorName">Auteur</label><br>
                    <select id="authorName" name="authorName" required>
                        <option></option>
                    </select><br>

                    <label for="categoryName">Catégorie</label><br>
                    <select id="categoryName" name="categoryName" required>
                        <option></option>
                    </select><br>

                    <input type="submit" id="submit">

                </form>
                `)
                $.ajax({
                    type: "GET",
                    url: "http://api.test/getAuthor.php",
                    data: "",
                    dataType : "json",
                    success : function(response){
                        console.log("ok");
                    }
                })
                .done(function(json){
                    console.log(json);
                    for(let option of json){
                    $('#authorName').append(`
                    <option>${option.lname}</option>
                    `)  
                    }    
                })
                $.ajax({
                    type: "GET",
                    url: "http://api.test/getCategory.php",
                    data: "",
                    dataType : "json",
                    success : function(response){
                        console.log("ok");
                    }
                })
                .done(function(json){
                    console.log(json);
                    for(let option of json){
                    $('#categoryName').append(`
                    <option>${option.name}</option>
                    `)  
                    }    
                })
            }
            if (element === "Catégorie"){
                $('#formAdd').append(`
                <h1>Ajouter une catégorie</h1>
                <form action="../API/admin.php" method="POST" id="addCatégory">

                    <label for="categoryName">Nom de catégorie</label><br>
                    <input type="text" id="categoryName" name="categoryName" required><br>

                    <input type="submit" id="submit">

                </form>
                `)
            }
            if (element === "Pays"){
                $('#formAdd').append(`
                <h1>Ajouter un Pays</h1>
                <form action="../API/admin.php" method="POST" id="addCountry">

                    <label for="countryName">Nom du pays</label><br>
                    <input type="text" id="countryName" name="countryName" required><br>

                    <input type="submit" id="submit">

                </form>
                `)
            }
        })
    }

    function updateElement(){
        $('#updateElement').change(function(){
            let element = $('#updateElement').val();
            $('#formUpdate').children().remove();
            if (element === "Auteur"){
                $('#formUpdate').append(`
                
                `)
            }
            if (element === "Livre"){
                $('#formUpdate').append(`
                
                `)
            }
            if (element === "Catégorie"){
                $('#formUpdate').append(`
                
                `)
            }
            if (element === "Pays"){
                $('#formUpdate').append(`
                
                `)
            }
        })
    }

    function deleteElement(){
        $('#deleteElement').change(function(){
            let element = $('#deleteElement').val();
            $('#formDelete').children().remove();
            if (element === "Auteur"){
                $('#formDelete').append(`
                
                `)  
            }
            if (element === "Livre"){
                $('#formDelete').append(`
                
                `)
            }
            if (element === "Catégorie"){
                $('#formDelete').append(`
                
                `)
            }
            if (element === "Pays"){
                $('#formDelete').append(`
                
                `)
            }
        })
    }

    $('#chooseAction').change(function(){
        let action = $('#chooseAction').val();
        $('#formAction').children().remove();
        if(action === "Ajouter un élément"){
            $('#formAction').append(`
            <br>
                <label for="addElement">Que voulez vous Ajouter?</label>
                <select id="addElement" name="addElement">
                    <option></option>
                    <option>Auteur</option>
                    <option>Livre</option>
                    <option>Pays</option>
                    <option>Catégorie</option>
                </select><br>
                <div id="formAdd">
                </div>
            `)
            addElement(); 
        }
        else if(action === "Modifier un élément"){
            $('#formAction').append(`
            <br>
                <label for="updateElement">Que voulez vous Modifier?</label>
                <select id="updateElement" name="updateElement">
                    <option></option>
                    <option>Auteur</option>
                    <option>Livre</option>
                    <option>Pays</option>
                    <option>Catégorie</option>
                </select><br>
                <div id="formUpdate">
                </div>
            `)
            updateElement();
        }
        else if(action ==="Supprimer un élément"){
            $('#formAction').append(`
            <br>
                <label for="deleteElement">Que voulez vous Supprimer?</label>
                <select id="deleteElement" name="deleteElement">
                    <option></option>
                    <option>Auteur</option>
                    <option>Livre</option>
                    <option>Pays</option>
                    <option>Catégorie</option>
                </select><br>
                <div id="formDelete">
                </div>
            `)
            deleteElement()
        }
    })
});
