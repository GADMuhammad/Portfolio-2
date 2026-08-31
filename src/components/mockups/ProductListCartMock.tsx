import { MockFrame } from './MockFrame'
import { desserts, cartRows } from '@/content/mockups'
import styles from './ProductListCartMock.module.css'

/** Mockup 05 — Product List with Cart: dessert grid + the cart column. */
export function ProductListCartMock() {
  return (
    <MockFrame>
      <div className={styles.pair}>
        <div>
          <p className={styles.h4}>Desserts</p>
          <div className={styles.grid}>
            {desserts.map((d) => (
              <span className={styles.item} key={d.name}>
                <span className={styles.image}>
                  <span className={styles.addBtn}>Add to cart</span>
                </span>
                <span className={styles.ellip}>{d.kind}</span>
                <span className={`${styles.ellip} ${styles.name}`}>{d.name}</span>
                <span className={styles.price}>{d.price}</span>
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cart}>
          <span className={styles.cartTitle}>Your cart (3)</span>
          {cartRows.map((c) => (
            <span className={styles.cartRow} key={c.name}>
              <span className={styles.cartText}>
                <span className={`${styles.ellip} ${styles.name}`}>{c.name}</span>
                <span className={styles.qty}>{c.qty}</span>
              </span>
              <span className={styles.lineTotal}>{c.total}</span>
            </span>
          ))}
          <span className={styles.orderTotal}>
            <span className={styles.orderTotalLabel}>Order total</span>
            <span className={styles.orderTotalValue}>$24.50</span>
          </span>
          <span className={styles.confirm}>Confirm order</span>
          <span className={styles.note}>Saved to localStorage — survives refresh</span>
        </div>
      </div>
    </MockFrame>
  )
}
