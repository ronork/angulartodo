var TodoModel = (function () {
    function TodoModel(title, status) {
        if (title === void 0) { title = ''; }
        if (status === void 0) { status = 'Started'; }
        this.title = title;
        this.status = status;
    }
    TodoModel.prototype.toggle = function () {
        this.status =
            this.status == 'Started'
                ? 'Completed'
                : 'Started';
    };
    return TodoModel;
})();
exports.TodoModel = TodoModel;
