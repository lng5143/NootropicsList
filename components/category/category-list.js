'use client'

import CATEGORIES from "@/data/categories";
import CategoryItem from "@/components/category/category-item";
import {useState} from "react";

export default function CategoryList() {


    return (
        <ul>
            <li><CategoryItem key={0} name="All" isActive={isInit || activeId === 0}
                              handleClick={() => handleSetActiveId(0)}/></li>
            {CATEGORIES.map(item => (
                <li>
                    <CategoryItem
                    key={item.id}
                    name={item.name}
                    isActive={activeId === item.id}
                    handleClick={() => handleSetActiveId(item.id)}/>
                </li>
            ))}
        </ul>
    )
}