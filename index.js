document.querySelector("form").addEventListener("submit", (e) => {
      
    e.preventDefault();

    var form = document.querySelector("form");

    /**
     * FORM ENTRIES TO OBJECT 
     */

    const entries = new FormData(form).entries();

    var data = Object.fromEntries(entries);     

    /**
     * FILE CONVERTION TO BASE64
     */

     var file = data.image;

    var reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (base64) => {
      data = {
        ...data,
        image: base64.target.result, // GET BASE 64 STRING
      };
    };

    reader.onerror = (error) => {
      console.log(error);
    };

    reader.onloadend = () => {
      console.log(data);
    };
  });