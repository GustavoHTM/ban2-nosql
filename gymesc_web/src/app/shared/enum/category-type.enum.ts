export enum CategoryTypeEnum {
    CHEST = 'CHEST',
    SHOULDERS = 'SHOULDERS',
    ABS = 'ABS',
    BICEPS = 'BICEPS',
    TRICEPS = 'TRICEPS',
    BACK = 'BACK',
    LEGS = 'LEGS',
    GLUTES = 'GLUTES',
    CALVES = 'CALVES',
    CARDIO = 'CARDIO',
    STRENGTH = 'STRENGTH',
    FLEXIBILITY = 'FLEXIBILITY',
    BALANCE = 'BALANCE',
    ENDURANCE = 'ENDURANCE',
    FULL_BODY = 'FULL_BODY',
    FUNCTIONAL = 'FUNCTIONAL',
    REHABILITATION = 'REHABILITATION',
    OTHERS = 'OTHERS'
}

export class CategoryTypeEnumHelper {
    static values(): CategoryTypeEnum[] {
        return Object.keys(CategoryTypeEnum).filter(
            (type) => isNaN(<any>type)
        ).map(key => CategoryTypeEnum[key as keyof typeof CategoryTypeEnum]);
    }

    static keys(): string[] {
        return Object.keys(CategoryTypeEnum).filter(
            (type) => isNaN(<any>type)
        );
    }
}
