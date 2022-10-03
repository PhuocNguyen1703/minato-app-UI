import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
    BsLayoutSidebar,
    BsArrowClockwise,
    BsTrash,
    BsPlus,
    BsCursor,
    BsEnvelope,
    BsFileEarmarkMinus,
    BsStar,
    BsPatchExclamation,
    BsFillRecordFill,
    BsFillStarFill,
    BsRecord,
} from 'react-icons/bs';

import styles from './Email.module.scss';
import SidebarItem from '~/layouts/components/Sidebar/SidebarItem';
import ComposeEmail from '~/components/Modal/ComposeEmail';
import Modal from '~/components/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setComposeEmailModalIsOpen } from '~/redux/Slice/modalSlice';

const cx = classNames.bind(styles);

function Email() {
    const { composeEmailModalIsOpen } = useSelector((state) => state.modal);
    const [isHidden, setIsHidden] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const menu = [
        { icon: <BsEnvelope />, title: 'Inbox', path: '/email' },
        { icon: <BsCursor />, title: 'Sent', path: '/email/sent' },
        { icon: <BsFileEarmarkMinus />, title: 'Draft', path: '/email/draft' },
        { icon: <BsStar />, title: 'Starred', path: '/email/starred' },
        { icon: <BsPatchExclamation />, title: 'Spam', path: '/email/spam' },
        { icon: <BsTrash />, title: 'Deleted', path: '/email/deleted' },
    ];

    const label = [
        { icon: <BsRecord />, color: 'forestgreen', title: 'Personal', path: '/personal' },
        { icon: <BsRecord />, color: 'indigo', title: 'Company', path: '/company' },
        { icon: <BsRecord />, color: 'orange', title: 'Important', path: '/important' },
        { icon: <BsRecord />, color: 'red', title: 'Private', path: '/private' },
    ];

    const email = [
        {
            sender: 'Victoria secret',
            title: 'How are you today ? How are you today ?How are you today ? How are you today ? How are you today ? How are you today ? How are you today ? How are you today ?How are you today ? How are you today ? How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: 'What are you doing ?',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Victoria secret',
            title: 'How are you today ?',
            status: { star: true, spam: false },
            type: 'important',
            createdAt: 'Feb 22',
        },
        {
            sender: 'John Thomson',
            title: 'Meeting now ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Fujiwara Daiki',
            title: 'What are you doing ?',
            status: { star: true, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Yamamoto Fuji',
            title: '',
            status: { star: true, spam: false },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Maria Tom',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Văn Huy',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'private',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Nguyễn Thị Hồng Vân',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: null,
            createdAt: 'Feb 22',
        },
        {
            sender: 'Donal Switch',
            title: 'How are you today ?',
            status: { star: true, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Lê Thị Bảo Nhi',
            title: 'How are you today ?',
            status: { star: false, spam: false },
            type: 'personal',
            createdAt: 'Feb 22',
        },
        {
            sender: 'Trần Quốc Toản',
            title: 'How are you today ?',
            status: { star: false, spam: true },
            type: 'company',
            createdAt: 'Feb 22',
        },
    ];

    const handleHiddenSidebar = () => {
        setIsHidden((prevState) => !prevState);
        getHiddenClass();
    };

    const handleCheckAll = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const getHiddenClass = () => {
        if (isHidden) return 'hide';
        return '';
    };

    const handleComposeEmail = () => {
        dispatch(setComposeEmailModalIsOpen(true));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('heading')}>
                <div className={cx('title')}>
                    <h5>Email Inbox</h5>
                    <p>Send receive emails.</p>
                </div>
                <div>picker day</div>
            </header>
            <div className={cx('header')}>
                <div className={cx('nav')}>
                    <span className={cx('icon')} onClick={handleHiddenSidebar}>
                        <BsLayoutSidebar />
                    </span>
                    <label className={cx('check-all')} onClick={handleCheckAll}>
                        <input type="checkbox" />
                        All
                    </label>
                    <span className={cx('icon')} onClick={handleRefresh}>
                        <BsArrowClockwise />
                    </span>
                    <span className={cx('icon')}>
                        <BsTrash />
                    </span>
                </div>
                <div>15 of 12348</div>
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar', getHiddenClass())}>
                    <button className={cx('create-email')} onClick={handleComposeEmail}>
                        <BsPlus />
                        Compose
                    </button>
                    {menu.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'menu-item'} />
                    ))}
                    <span className={cx('label')}>Labels</span>
                    {label.map((item, index) => (
                        <SidebarItem key={index} item={item} className={'label-item'} />
                    ))}
                </div>
                <div className={cx('content')}>
                    {email.map((item, index) => (
                        <div key={index} className={cx('email-item')}>
                            <div className={cx('item-content')}>
                                <input type="checkbox" />
                                <BsFillStarFill
                                    className={cx('icon-star')}
                                    style={{ color: `${item.status.star && 'gold'}` }}
                                />
                                <BsPatchExclamation
                                    className={cx('icon-spam')}
                                    style={{ color: `${item.status.spam && 'red'}` }}
                                />
                                <div className={cx('item-title')}>
                                    <span>{item.sender}</span>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className={cx('date')}>
                                {item.type && (
                                    <BsFillRecordFill
                                        style={{
                                            color: `${
                                                (item.type === 'personal' && 'forestgreen') ||
                                                (item.type === 'company' && 'indigo') ||
                                                (item.type === 'important' && 'orange') ||
                                                (item.type === 'private' && 'red')
                                            }`,
                                        }}
                                    />
                                )}
                                <span>{item.createdAt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {composeEmailModalIsOpen && (
                <Modal>
                    <ComposeEmail />
                </Modal>
            )}
        </div>
    );
}

export default Email;
