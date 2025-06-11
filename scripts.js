// API endpoint
var API_ENDPOINT = "https://md3e6zs891.execute-api.ap-south-1.amazonaws.com/prod/students";

$(document).ready(function () {

    // POST request to save student data
    $('#savestudent').click(function () {
        var inputData = {
            "studentid": $('#studentid').val(),
            "name": $('#name').val(),
            "class": $('#class').val(),
            "age": $('#age').val()
        };

        $.ajax({
            url: API_ENDPOINT,
            type: 'POST',
            data: JSON.stringify(inputData),
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $('#studentSaved').text("Student Data Saved Successfully!");
                console.log("Saved:", response);
            },
            error: function (xhr, status, error) {
                alert("Error saving student data: " + error);
                console.error("Error:", xhr.responseText);
            }
        });
    });

    // GET request to fetch all student data
    $('#getstudents').click(function () {
        $.ajax({
            url: API_ENDPOINT,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $('#studentTable tbody').empty();

                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }

                $.each(response, function (i, data) {
                    $('#studentTable tbody').append(
                        `<tr>
                            <td>${data.studentid}</td>
                            <td>${data.name}</td>
                            <td>${data.class}</td>
                            <td>${data.age}</td>
                        </tr>`
                    );
                });
            },
            error: function (xhr, status, error) {
                alert("Error retrieving student data: " + error);
                console.error("Error:", xhr.responseText);
            }
        });
    });

});
