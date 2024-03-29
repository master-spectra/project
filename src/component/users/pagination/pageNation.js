import UsersStyle from "./pageNation.module.scss";
import React from "react";

export const PageNation = ({pageSize, totalUserCount, currentPage, changePage, getUsersThunk}) => {
    const countPage     = Math.ceil(totalUserCount / pageSize);
    const pageList      = [];

    let copyCurrentPage = currentPage;

    for (let i = 1; i <= countPage; i++) {
        pageList.push(i);
    };

    const onPageChanged = pageNumber => {
        changePage(pageNumber);
        getUsersThunk(pageNumber, pageSize);
    };

    const pageArray = pageList.map((item, index) => {
        if (currentPage > 5) {
            const min       = currentPage - 5;
            const max       = currentPage + 5;
            const length    = max - min;

            return item >= min && item < max && length === 10 ? <span className={currentPage === item ? UsersStyle.selectedItem : null} onClick={() => onPageChanged(item)} key={index}>{item}</span> : null
        };

        return item < 11 ? <span className={currentPage === item ? UsersStyle.selectedItem : null} onClick={() => onPageChanged(item)} key={index}>{item}</span> : null
    });

    const requestOnPrevPage = type => {
        if (copyCurrentPage > 1 && type === "prev") {
            onPageChanged(--copyCurrentPage, 5);
            return null;
        };

        if (copyCurrentPage === 1 && type === "prev") {
            copyCurrentPage = pageList.length;
            onPageChanged(copyCurrentPage, 5);

            return null;
        };

        if (copyCurrentPage === pageList.length && type === "next") {
            copyCurrentPage = 1;
            onPageChanged(copyCurrentPage, 5);

            return null;
        };

        onPageChanged(++copyCurrentPage, 5);
    };

    return (
        <>
            <button className={UsersStyle.prev} onClick={() => requestOnPrevPage("prev")}>Prev</button>
            {pageArray}
            <button className={UsersStyle.next} onClick={() => requestOnPrevPage("next")}>Next</button>
        </>
    );
};