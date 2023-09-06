// Componente llamado index (no es necesario llamar el archivo porque el sistema sabe que debe entrar al index)
import Nav from "./Nav";
import ProductsCard from "./ProductCard";

// Componente con nombre custom (se debe poner el nombre del archivo)
import ShoppingCartBadge from "./ShoppingCartBadge/ShoppingCartBadge";

// export del Barrel file (exporta todos los componentes de un carpeta general, en este caso "molecules")
export { Nav, ProductsCard, ShoppingCartBadge };
