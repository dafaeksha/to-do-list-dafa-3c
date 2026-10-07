// Mengambil elemen dari HTML

const todoInput = document.getElementById("todoInput");

const addButton = document.getElementById("addButton");

const todoList = document.getElementById("todoList");

const totalTask = document.getElementById("totalTask");

const completedTask = document.getElementById("completedTask");


// Ketika tombol Tambah diklik
addButton.addEventListener("click", addTodo);


// Fungsi menambahkan tugas
function addTodo() {

    // Mengambil isi input
    const taskText = todoInput.value.trim();


    // Mengecek apakah input kosong
    if (taskText === "") {

        alert("Catatan Anda tidak boleh kosong");

        return;
    }


    // Membuat elemen li
    const listItem = document.createElement("li");

    listItem.classList.add("todo-item");


    // Membuat bagian kiri
    const todoLeft = document.createElement("div");

    todoLeft.classList.add("todo-left");


    // Membuat checkbox
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    // Membuat teks
    const taskSpan = document.createElement("span");

    taskSpan.textContent = taskText;


    // Memasukkan checkbox dan teks
    todoLeft.appendChild(checkbox);

    todoLeft.appendChild(taskSpan);


    // Membuat tombol hapus
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Hapus";

    deleteButton.classList.add("delete-button");


    // Ketika checkbox dicentang
    checkbox.addEventListener("change", function () {

        listItem.classList.toggle(
            "completed",
            checkbox.checked
        );

        updateStats();
    });


    // Ketika tombol hapus ditekan
    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateStats();
    });


    // Memasukkan elemen ke dalam list
    listItem.appendChild(todoLeft);

    listItem.appendChild(deleteButton);


    // Menampilkan tugas
    todoList.appendChild(listItem);


    // Mengosongkan input
    todoInput.value = "";


    // Update statistik
    updateStats();
}


// Fungsi statistik
function updateStats() {

    // Mengambil semua tugas
    const allTasks =
        document.querySelectorAll(".todo-item");


    // Mengambil tugas yang selesai
    const completedTasks =
        document.querySelectorAll(
            ".todo-item.completed"
        );


    // Menampilkan jumlah
    totalTask.textContent =
        allTasks.length;

    completedTask.textContent =
        completedTasks.length;
}