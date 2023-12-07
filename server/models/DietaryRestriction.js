module.exports = (sequelize, DataTypes) => {
    const DietaryRestrictions = sequelize.define("DietaryRestrictions", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Mediterranean: {
            type: DataTypes.BOOLEAN,  
            allowNull: false,
        },
        DairyFree: {
            type: DataTypes.BOOLEAN,  
            allowNull: false,
        },
        GlutenFree: {
            type: DataTypes.BOOLEAN,  
        },
        WheatFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        EggFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        PeanutFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        TreeNutFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        FishFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        ShellfishFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        PorkFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        RedMeatFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        CrustaceanFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        CeleryFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        MustardFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        SesameFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        LupineFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        MolluskFree: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
        Kosher: {
            type: DataTypes.BOOLEAN,   
            allowNull: false,
        },
    })

    DietaryRestrictions.associate = (models) => {
        DietaryRestrictions.belongsTo(models.Users, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
    }

    return DietaryRestrictions
}