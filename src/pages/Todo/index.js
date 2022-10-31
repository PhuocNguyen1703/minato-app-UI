import React from 'react';
import classNames from 'classnames/bind';
import { BsTrash, BsPlus, BsJournal, BsCheck2, BsExclamationLg, BsFillRecordFill, BsRecord } from 'react-icons/bs';

import styles from './Todo.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import { useDispatch } from 'react-redux';
import { setTodoInfoModalIsOpen } from '~/redux/Slice/modalSlice';
import { useSelector } from 'react-redux';
import TodoInfo from '~/components/Modal/TodoInfo';
import Modal from '~/components/Modal';

const cx = classNames.bind(styles);

function Todo() {
    const { todoInfoModalIsOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsJournal />, title: 'My Tasks', path: '/todo' },
        { icon: <BsExclamationLg />, title: 'Important', path: '/sent' },
        { icon: <BsCheck2 />, title: 'Completed', path: '/title' },
        { icon: <BsTrash />, title: 'Deleted', path: '/deleted' },
    ];

    const tags = [
        { icon: <BsRecord />, color: '#349eff', title: 'Team', path: '/company' },
        { icon: <BsRecord />, color: 'forestgreen', title: 'Low', path: '/important' },
        { icon: <BsRecord />, color: 'orange', title: 'Medium', path: '/important' },
        { icon: <BsRecord />, color: 'red', title: 'Hight', path: '/important' },
    ];

    const todo = [
        {
            title: 'How are you today ? How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['low'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['medium', 'team'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: [],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['hight'],
            createdAt: 'Feb 22',
        },
        {
            title: 'How are you today ?',
            type: ['team'],
            createdAt: 'Feb 22',
        },
    ];

    const getStyleColor = (type) => {
        if (type === 'team') return '#349eff';
        if (type === 'low') return 'forestgreen';
        if (type === 'medium') return 'orange';
        return 'red';
    };

    const handleSelectedTodoItem = (item) => {
        // dispatch(setSelectedItem(item));
        dispatch(setTodoInfoModalIsOpen(true));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <button className={cx('create-task')}>
                    <BsPlus />
                    Create Task
                </button>
                {menu.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'menu-item'} />
                ))}
                <span className={cx('tags')}>Tags</span>
                {tags.map((item, index) => (
                    <SidebarItem key={index} item={item} className={'tags-item'} />
                ))}
            </div>
            <div className={cx('content')}>
                {todo.map((item, index) => (
                    <div key={index} className={cx('todo-item')} onClick={() => handleSelectedTodoItem(item)}>
                        <div className={cx('item-content')}>
                            <input type="checkbox" />
                            <span className={cx('item-title')}>{item.title}</span>
                        </div>
                        <div className={cx('date')}>
                            {item.type?.map((type, idx) => (
                                <BsFillRecordFill key={idx} style={{ color: getStyleColor(type) }} />
                            ))}
                            <span>{item.createdAt}</span>
                        </div>
                    </div>
                ))}
            </div>

            {todoInfoModalIsOpen && (
                <Modal>
                    <TodoInfo />
                </Modal>
            )}
        </div>
    );
}

export default Todo;
