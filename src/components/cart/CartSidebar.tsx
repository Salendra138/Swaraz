import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function CartSidebar() {
    const { items, removeFromCart, updateQuantity, getCartTotal, isOpen, setIsOpen } = useCart();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-6">
                <SheetHeader className="mb-4">
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        Shopping Cart ({items.length})
                    </SheetTitle>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <ShoppingBag className="h-20 w-20 text-muted-foreground mb-4 opacity-20" />
                        <p className="text-muted-foreground">Your cart is empty</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Continue Shopping
                        </Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 -mx-6 px-6">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-20 w-20 rounded-md border border-border overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                                                <p className="text-xs text-muted-foreground">{item.weight}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center border border-border rounded-md">
                                                    <button
                                                        className="p-1 hover:bg-muted text-muted-foreground"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-8 text-center text-xs">{item.quantity}</span>
                                                    <button
                                                        className="p-1 hover:bg-muted text-muted-foreground"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <span className="font-medium text-sm">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-muted-foreground hover:text-destructive self-start p-1"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="mt-auto pt-4 space-y-4">
                            <Separator />
                            <div className="flex items-center justify-between font-medium">
                                <span>Subtotal</span>
                                <span>Rs. {getCartTotal().toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                Shipping and taxes calculated at checkout
                            </p>
                            <div className="grid gap-2">
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                    Checkout
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setIsOpen(false)}
                                    asChild
                                >
                                    <Link to="/cart">View Cart Page</Link>
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
