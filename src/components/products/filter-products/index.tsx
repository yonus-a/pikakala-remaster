"use client";

import FilterCategories from "@/components/filters/filter-categories";
import FilterBrands from "@/components/filters/filter-brands";
import DialogContainer from "../../general/dialog-container";
import FilterPrice from "@/components/filters/filter-price";
import MaterialTheme from "../../general/material-theme";
import Button from "@/components/general/buttons/btn";
import DialogLayer from "../../general/dialog-layer";
import DialogCta from "../../general/dialog-cta";
import Dialog from "../../general/dialog";
import { Switch } from "@mui/material";
import "./style.scss";

interface Props {
  maxPrice: number;
}

export default function FilterProducts({ maxPrice }: Props) {
  const variants = {
    initial: { y: 150 },
    animate: { y: 0 },
  };

  return (
    <div className="filter-products">
      <Dialog ariaLabel="filter Product">
        <DialogCta>فیلتر</DialogCta>
        <DialogLayer>
          <DialogContainer variants={variants}>
            <MaterialTheme>
              <form method="get">
                <FilterCategories />
                <FilterBrands />
                <FilterPrice maxPrice={maxPrice} />
                <div className="switch-container">
                  <h2>فقط کالاهای موجود</h2>
                  <Switch className="switch" name="avalable" />
                </div>
                <Button type="submit" className="submit">
                  اعمال فیلتر
                </Button>
                <DialogCta type="button">لغو</DialogCta>
              </form>
            </MaterialTheme>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
