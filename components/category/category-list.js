'use client'

import CATEGORIES from "@/data/categories";
import CategoryItem from "@/components/category/category-item";
import {useState} from "react";

export default function CategoryList() {


    return (
        <ul>
            <li key={0}><CategoryItem name="All" isActive={isInit || activeId === 0}
                              handleClick={() => handleSetActiveId(0)}/></li>
            {CATEGORIES.map(item => (
                <li key={item.id}>
                    <CategoryItem
                    name={item.name}
                    isActive={activeId === item.id}
                    handleClick={() => handleSetActiveId(item.id)}/>
                </li>
            ))}
        </ul>
    )
}