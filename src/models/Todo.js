import { Backbone } from 'backbone';

export default const Todo = Backbone.Model.extend({
    defaults: () => {
        return {
            title: "empty todo",
            order: Todos.nextOrder(),
            done: false
        }
    }

    toggle: () => {
        this.save({done: !this.get("done")})
    }
});
