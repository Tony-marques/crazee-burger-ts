import React, { ReactNode } from "react";
import { ProductType } from "../../../../../../types/ProductType";
import Inputs from "./Inputs";

type AdminFormProps = {
  product: ProductType;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  children?: ReactNode;
};

type InputRefType = React.LegacyRef<HTMLInputElement> | undefined;

const AdminForm = React.forwardRef(
  (
    { product, onSubmit, onChange, onBlur, onFocus, children }: AdminFormProps,
    ref: InputRefType
  ) => {
    return (
      <>
        <div className="image-preview">
          {product.imageSource ? (
            <img src={product.imageSource} alt="image preview" />
          ) : (
            <p>Aucune image</p>
          )}
        </div>
        <form action="" onSubmit={onSubmit}>
          <Inputs
            onChange={onChange}
            product={product}
            ref={ref}
            onBlur={onBlur}
            onFocus={onFocus}
          />

          {children}
        </form>
      </>
    );
  }
);

export default AdminForm;
