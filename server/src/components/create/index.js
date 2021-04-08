import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, Select, Radio } from 'antd';
const FormItem = Form.Item;

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }

        // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    // onChangeTodoDescription(e) {
    //     this.setState({
    //         todo_description: e.target.value
    //     });
    // }
    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }
    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    // onSubmit(e) {
    //     e.preventDefault();

    //     console.log(`Form submitted:`);
    //     console.log(`Todo Description: ${this.state.todo_description}`);
    //     console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    //     console.log(`Todo Priority: ${this.state.todo_priority}`);

    //     this.setState({
    //         todo_description: '',
    //         todo_responsible: '',
    //         todo_priority: '',
    //         todo_completed: false
    //     })
    // }

   
    handleFormSubmit = (values) => {
        console.log(values);

        const newTodo = {
            todo_description: values.description,
            todo_responsible: values.responsible,
            todo_priority: values.priority,
            todo_completed: true
        };

        console.log(newTodo)

        axios.post('http://localhost:5000/todos/add', newTodo)
            .then(res => console.log(res.data));
        // const title = values.title;
        // const content = values.content;
        // console.log(title, content);
    };
    render() {
        return (
            <div>
                <h1> Create New Todo</h1>
                {/* <Form name="control-hooks" 
                // onSubmit={this.onSubmit}
                onFinish={(v)=>this.onFinish(v)}
                >
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="responsible"
                        label="Responsible"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="radio-group" label="Radio.Group">
                        <Radio.Group>
                            <Radio value="a">Low</Radio>
                            <Radio value="b">Medium</Radio>
                            <Radio value="c">High</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
             */}

                <Form onFinish={(values) => this.handleFormSubmit(values)}>

                <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="responsible"
                        label="Responsible"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="priority" label="Radio.Group">
                        <Radio.Group>
                            <Radio value="low">Low</Radio>
                            <Radio value="medium">Medium</Radio>
                            <Radio value="high">High</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <FormItem >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}