export interface SettingsProps {
     counts: {
          rooms: number;
          children: number;
          adults: number;
     };
     setCounts: React.Dispatch<
          React.SetStateAction<{
               rooms: number;
               children: number;
               adults: number;
          }>
     >;
     onDone: () => void;
}
