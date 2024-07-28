import { ReactNode } from 'react';
import './Section.scss';

function Sections ({ children }: { children: ReactNode }) {
    return (
        <section>
            { children }
        </section>
    );
}

export default Sections;