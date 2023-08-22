import React from "react";
import styles from "../../styles/currencyInput.module.css";

const CurrencyInput = () => {
  return (
    <div className={styles.wrapper}>
      <form className="form-inline">
        <label className="sr-only" for="inlineFormInputGroup">
          Amount
        </label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <div className="input-group-addon currency-symbol">$</div>
          <input
            type="text"
            className={styles.currency_amount}
            id="inlineFormInputGroup"
            placeholder="0.00"
            size="8"
          />
          <div className={styles.currency_addon}>
            <select className={styles.currency_selector}>
              <option data-symbol="$" data-placeholder="0.00" selected>
                USD
              </option>
              <option data-symbol="€" data-placeholder="0.00">
                EUR
              </option>
              <option data-symbol="£" data-placeholder="0.00">
                GBP
              </option>
              <option data-symbol="¥" data-placeholder="0">
                JPY
              </option>
              <option data-symbol="$" data-placeholder="0.00">
                CAD
              </option>
              <option data-symbol="$" data-placeholder="0.00">
                AUD
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CurrencyInput;
