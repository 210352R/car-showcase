import { MouseEventHandler } from "react";
import { Dispatch, SetStateAction } from 'react';

export interface CustomButtonProps {
    // isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }


export interface  SearchManuFacturerProps{
  manufacturer : string,
  setManuFacturer :  Dispatch<SetStateAction<string>>;
}

export interface CarProps{
  city_mpg:number;
  class:string;
  combination_mpg:number;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string,
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
}

export interface filterProps{
  make:string;
  model:string;
  // year:string;
  // fuel_type:string;
  // city_mpg:string;
  // highway_mpg:string;
  // combination_mpg:string;
  // cylinders:string;
  // displacement:string;
  // drive:string;
  // transmission:string;
  // class:string;
}

export interface HomeProps {
  searchParams: filterProps;
}