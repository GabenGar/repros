import {
  createContext,
  useContext,
  type ReactNode,
  useState,
  useEffect,
} from "react";
import { useParams } from "next/navigation";

type IClientContext =
  | {
      isClient: false;
    }
  | {
      isClient: true;
      locale: Intl.Locale;
    };

const defaultContext: IClientContext = {
  isClient: false,
};

const ClientContext = createContext<IClientContext>(defaultContext);

interface IProps {
  children: ReactNode;
}

export function ClientProvider({ children }: IProps) {
  const params = useParams<{ lang: string }>();
  const [isClient, switchIsClient] = useState(false);
  const [locale, changeLocale] = useState<Intl.Locale>();
  const lang = params.lang;

  useEffect(() => {
    (async () => {
      switchIsClient(true);
    })();
  }, []);

  useEffect(() => {
    console.log(lang);
    const newLocale = new Intl.Locale(lang);
    changeLocale(newLocale);
  }, [lang]);

  return (
    <ClientContext.Provider
      value={
        !isClient || !locale
          ? defaultContext
          : {
              isClient,
              locale,
            }
      }
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClient(): IClientContext {
  const context = useContext(ClientContext);

  return context;
}
