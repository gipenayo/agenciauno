$(document).ready(function () {
    $('.editBtn').on('click', function () {
        var $editModal = $('#editEmployeeModal');
        var id = $(this).data('id');
        var name = $(this).data('name');
        var phone = $(this).data('phone');
        var password = $(this).data('password');

        $editModal.find('#edit-id_user').val(id);
        $editModal.find('#edit-name').val(name);
        $editModal.find('#edit-phone').val(phone);
        $editModal.find('#edit-password').val(password);

        $editModal.modal('show');
    });
    $(document).ready(function () {
        $('.view').on('click', function () {
            var $viewModal = $('#viewEmployeeModal');
            var id = $(this).data('id');
            var name = $(this).data('name');
            var email = $(this).data('email');
            var phone = $(this).data('phone');
            var password = $(this).data('password');
    
            $viewModal.find('#view-name').val(name);
            $viewModal.find('#view-email').val(email);
            $viewModal.find('#view-phone').val(phone);
            $viewModal.find('#view-password').val(password);
    
            $viewModal.modal('show');
        });
    });
    $('.deleteBtn').on('click', function () { 
        var $deleteModal = $('#deleteEmployeeModal');
        var id = $(this).data('id');
        console.log(id);
        $deleteModal.find('#delete-id_user').val(id);
        $deleteModal.modal('show');
    });
});
