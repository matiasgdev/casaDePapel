CREATE TABLE `monitoreo`.`eventos` (
   `ts` DATETIME NOT NULL ,
   `concepto` VARCHAR(100) NOT NULL ,
   `valor` INT NOT NULL )
ENGINE = InnoDB;