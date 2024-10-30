import { Header } from '../components/Header';

export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        </>
    );
}